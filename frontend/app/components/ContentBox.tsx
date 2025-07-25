"use client";

import { Parallax } from "react-scroll-parallax";
import { ContentBoxType } from "../types/types";
import Draggable from "./Draggable";
import Image from "next/image";
import Link from "next/link";

export const ContentBox: React.FC<ContentBoxType> = ({
  title,
  text,
  link,
  imageUrl,
  location,
  remWidth,
  layout,
  zIndex,
  blur,
  bringToFront,
}) => {
  const left = location?.left ?? 0;
  const top = location?.top ?? 0;

  return (
    <Draggable bringToFront={bringToFront} zIndex={zIndex}>
      <Parallax speed={20} className="parallax-box">
        <div
          className={"content-box"}
          style={{
            left: `${left}rem`,
            top: `${top}rem`,
            transition: "height 1s ease-in-out",
            display: "flex",
            flexDirection: layout === "horizontal" ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            width: `${remWidth ?? 20}rem`,
            filter: blur ? "blur(2px)" : "none",
          }}
          onMouseDown={bringToFront}
        >
          <div className="triangle" />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{title || "Subtitle"}</h2>
            <p>{text}</p>
            {link && (
              <Link href={link}>
                <button style={{ width: "4rem" }}>Button</button>
              </Link>
            )}{" "}
          </div>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || "Content image"}
              width={80}
              height={80}
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            />
          )}
        </div>
      </Parallax>
    </Draggable>
  );
};

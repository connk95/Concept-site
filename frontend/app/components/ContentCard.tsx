"use client";

import { NetworkContentCardType } from "../types/types";
import Image from "next/image";
import Link from "next/link";

export const ContentCard: React.FC<NetworkContentCardType> = ({
  title,
  text,
  imageUrl,
  remSize,
  layout,
  blur,
  buttonLink,
}) => {
  return (
    <div>
      <div
        className={"content-card"}
        style={{
          transition: "height 1s ease-in-out",
          display: "flex",
          flexDirection: layout === "horizontal" ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          width: `${remSize?.width ?? 20}rem`,
          height: `${remSize?.height ?? 30}rem`,
          filter: blur ? "blur(2px)" : "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || "Content image"}
              width={80}
              height={80}
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            />
          )}
          <h2>{title || "Subtitle"}</h2>
          <p>{text}</p>
          {buttonLink && (
            <Link href={buttonLink}>
              <button style={{ width: "4rem" }}>Button</button>
            </Link>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

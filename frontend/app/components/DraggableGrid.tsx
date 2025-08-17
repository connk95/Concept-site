"use client";

import React from "react";
import { ImageBox } from "./ImageBox";
import * as utils from "../lib/utils";
import { DraggableGridProps } from "../types/types";
import { Parallax } from "react-scroll-parallax";

export const DraggableImageGrid: React.FC<DraggableGridProps> = ({
  id,
  images,
  cols,
  remSize,
  gap,
  zIndexStack,
  setZIndexStack,
}) => {
  return (
    <Parallax speed={0} className="parallax-box">
      <div
        style={{
          position: "absolute",
          transition: "height 0.3s ease-in-out",
          zIndex: 0,
        }}
      >
        {images.map((imageUrl, index) => {
          const col = index % (cols ?? 1);
          const row = Math.floor(index / (cols ?? 1));

          const left = col * ((remSize?.width ?? 2) + (gap ?? 1));
          const top = row * ((remSize?.height ?? 2) + (gap ?? 1));

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${left}rem`,
                top: `${top}rem`,
              }}
            >
              <ImageBox
                id={id}
                imageUrl={imageUrl}
                index={index}
                remSize={{
                  width: remSize?.width ?? 0,
                  height: remSize?.height ?? 0,
                }}
                zIndex={zIndexStack.indexOf(id + index) + 1}
                bringToFront={() =>
                  utils.bringToFront(`${id + index}`, setZIndexStack)
                }
              />
            </div>
          );
        })}
      </div>
    </Parallax>
  );
};

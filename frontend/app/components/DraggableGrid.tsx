"use client";

import React from "react";
import { ImageBox } from "./ImageBox";
import * as utils from "../lib/utils";
import { DraggableGridProps } from "../types/types";

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
    <div style={{ position: "relative" }}>
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
  );
};

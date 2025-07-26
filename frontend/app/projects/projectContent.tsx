"use client";

import { useState } from "react";
import { ContentBox } from "../components/ContentBox";
import { HeroText } from "../components/HeroText";
import * as utils from "../lib/utils";

export default function TechnologyContent() {
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);
  const pageHeight = 100;

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={[`${title}`]} />

      <ContentBox
        key={index}
        title={title}
        text={text}
        // boxId={boxId}
        location={location}
        imageUrl={imageUrl}
        layout="horizontal"
        // zIndex={zIndexStack.indexOf(boxId) + 1}
        zIndex={zIndexStack.indexOf(id) + 1}
        // bringToFront={() => utils.bringToFront(boxId, setZIndexStack)}
        bringToFront={() => utils.bringToFront(id, setZIndexStack)}
      />
    </div>
  );
}

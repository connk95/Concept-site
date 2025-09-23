"use client";

import { HeroText } from "../components/HeroText";
import { ImageBox } from "../components/ImageBox";
import * as utils from "../lib/utils";
import { useState } from "react";

export const ResumeContent: React.FC = ({}) => {
  const pageHeight = 80;
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={["RESUME"]} />
      <ImageBox
        location={{ top: 20, left: 10 }}
        id={"0"}
        imageUrl={"/assets/resume2.png"}
        remSize={{ width: 50, height: 60 }}
        zIndex={zIndexStack.indexOf("0") + 1}
        bringToFront={() => utils.bringToFront("0" as string, setZIndexStack)}
      />
      <ImageBox
        location={{ top: 9, left: 4 }}
        id={"1"}
        imageUrl={"/assets/resume1.png"}
        remSize={{ width: 50, height: 60 }}
        zIndex={zIndexStack.indexOf("1") + 1}
        bringToFront={() => utils.bringToFront("1" as string, setZIndexStack)}
      />
    </div>
  );
};

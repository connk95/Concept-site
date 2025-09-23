"use client";

import { ContentBox } from "../components/ContentBox";
import { HeroText } from "../components/HeroText";
import * as utils from "../lib/utils";
import { useState } from "react";

export const ContactContent: React.FC = ({}) => {
  const pageHeight = 80;
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={["CONTACT"]} />
      <ContentBox
        id={"id"}
        title={"Contact"}
        text={"connorketcheson01@gmail.com <br> 07033642764"}
        location={{ top: 9, left: 4 }}
        remWidth={50}
        buttonText="demo"
        layout="horizontal"
        zIndex={zIndexStack.indexOf(`0`) + 1}
        bringToFront={() => utils.bringToFront(`0` as string, setZIndexStack)}
      />
    </div>
  );
};

"use client";

import { ContentBox } from "../components/ContentBox";
import { HeroText } from "../components/HeroText";
import * as utils from "../lib/utils";
import { useState } from "react";

export const AboutContent: React.FC = ({}) => {
  const pageHeight = 80;
  const [zIndexStack, setZIndexStack] = useState<string[]>([]);

  return (
    <div
      style={{
        height: `${pageHeight}rem`,
        transition: "height 1s ease-in-out",
      }}
    >
      <HeroText textArray={["ABOUT"]} />
      <ContentBox
        id={"id"}
        title={"About"}
        text={
          "A full stack web developer working in Tokyo, originally from Toronto, Canada. My specialty, and favourite language to work with is Typescript, and I have some experience with Java. <br> I enjoy the challenge of working with a large group of other developers and designers in English and Japanese."
        }
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
